module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  moduleNameMapper: {
    "@functions/(.*)": "<rootDir>/src/functions/$1",
    "@libs/(.*)": "<rootDir>/src/libs/$1",
    "@enums/(.*)": "<rootDir>/src/enums/$1",
    "@model/(.*)": "<rootDir>/src/model/$1",
    "@schema/(.*)": "<rootDir>/src/schema/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
  },
};
