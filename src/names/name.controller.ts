/* eslint-disable no-unused-vars */
import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../controller/controller.types';
import NameEntity from './name.entity';
import NameType, { CreateName } from './name.types';
import AlreadyExists from '../errors/AlreadyExists';
import ConnectionProblem from '../errors/ConnectionProblem';
import NotFound from '../errors/NotFound';
import HttpError from '../errors/HttpError';

import successfullResponse from '../utils/success';
import readFile from '../utils/fileReader';

class NameController implements Controller {
  public path = '/names';

  public router = express.Router();

  private names: NameType[] = [
    {
      name: 'Jukka',
      amount: 2,
    },
  ];

  constructor() {
    this.initializeRoutes();
    this.populateData();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllNames);
    this.router.get(`${this.path}/:name`, this.getName);
    this.router.post(`${this.path}/:name`, this.createName);
    this.router.patch(`${this.path}/:name`, this.voteName);
  }

  private nameRepository = getRepository(NameEntity);

  private async populateData() {
    // Read file
    const { names } = await readFile();

    // Insert data to db
    await this.nameRepository
      .createQueryBuilder()
      .insert()
      .into(NameEntity)
      .values(names)
      .onConflict(`("name") DO NOTHING`)
      .execute();
  }

  private getAllNames = async (
    _request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const allNames = await this.nameRepository.find();
      successfullResponse(
        200,
        'All names succesfully fetched',
        response,
        allNames
      );
    } catch (e) {
      if (e && e.errno === -4078) {
        next(new ConnectionProblem());
      }
      next(new HttpError(500, e));
    }
  };

  private getName = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const requestedName = request.params.name;
    try {
      const nameData = await this.nameRepository.find({
        where: { name: requestedName },
      });
      if (nameData && nameData.length !== 0) {
        successfullResponse(
          200,
          `Data for name "${requestedName}" succesfully fetched.`,
          response,
          nameData
        );
      } else {
        next(new HttpError(500, 'moro'));
      }
    } catch (e) {
      if (e && e.errno === -4078) {
        next(new ConnectionProblem());
      }
      next(new HttpError(500, e));
    }
  };

  private voteName = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const requestedName = request.params.name;
    try {
      const voteUpdate = await this.nameRepository
        .createQueryBuilder()
        .update(NameEntity)
        .set({ amount: () => 'amount + 1' })
        .where('name = :name', { name: requestedName })
        .returning(['id', 'name', 'amount'])
        .updateEntity(true)
        .execute();

      if (voteUpdate && voteUpdate.affected === 1) {
        successfullResponse(
          200,
          `Succesfully voted name "${requestedName}"`,
          response,
          voteUpdate.raw[0]
        );
      } else {
        next(new NotFound(requestedName));
      }
    } catch (e) {
      if (e && e.errno === -4078) {
        next(new ConnectionProblem());
      }
      next(new HttpError(500, e));
    }
  };

  private createName = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const requestedName: string = request.params.name;
    try {
      const newName = this.nameRepository.create({ name: requestedName });
      await this.nameRepository.save(newName);
      successfullResponse(
        200,
        `"${requestedName}" succesfully created`,
        response,
        requestedName
      );
    } catch (e) {
      if (e && e.code === '23505') {
        next(new AlreadyExists(requestedName));
      }

      if (e && e.errno === -4078) {
        next(new ConnectionProblem());
      }

      next(new HttpError(500, e));
    }
  };
}

export default NameController;
