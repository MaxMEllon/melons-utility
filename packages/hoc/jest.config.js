module.exports = {
  browser: true,
  testURL: "http://localhost/",
  testMatch: ["**/__tests__/*.test.js"],
  setupFiles: ["../../configs/setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
}
