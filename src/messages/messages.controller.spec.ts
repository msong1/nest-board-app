import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('messagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
