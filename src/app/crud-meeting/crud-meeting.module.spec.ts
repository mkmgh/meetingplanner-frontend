import { CrudMeetingModule } from './crud-meeting.module';

describe('CrudMeetingModule', () => {
  let crudMeetingModule: CrudMeetingModule;

  beforeEach(() => {
    crudMeetingModule = new CrudMeetingModule();
  });

  it('should create an instance', () => {
    expect(crudMeetingModule).toBeTruthy();
  });
});
