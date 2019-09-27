import { generateConfig } from "./snapshot";

// test('snapshot 快照测试', () => {
//   expect(generateConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// })

test("snapshot 快照测试", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": 80,
      "server": "127.0.0.1",
      "time": Any<Date>,
    }
  `
  );
});
