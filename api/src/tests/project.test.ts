const { allProjects, addProject, updateProject, Project } = require('../model/project');

test('allProjects', () => {
  expect(allProjects()).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String)
      })
    ])
  )
});

test('addProject', async () => {
  expect(await addProject({project: {name: "Test Project"}})).toMatchObject({id: expect.any(Number), name: "Test Project"});
});

test('updateProject', async () => {
  expect(await updateProject({patch: {id: 1, name: "Update Project"}})).toMatchObject({id: 1, name: "Update Project"});
});