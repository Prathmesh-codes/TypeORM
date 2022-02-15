import { Test, TestingModule } from '@nestjs/testing';
import { TaskmanagementController } from './taskmanagement.controller';

describe('TaskmanagementController', () => {
  let controller: TaskmanagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskmanagementController],
    }).compile();

    controller = module.get<TaskmanagementController>(TaskmanagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
