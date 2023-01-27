const { check } = require("express-validator");
const { validateResult } = require("../helpers/app.helper");
const validateCreate = [
  check("name").isLength({ min: 3 }).isAlpha(),
  check("secondName").default("null").isAlpha(),
  check("lastName").isLength({ min: 4 }).isAlpha(),
  check("secondLastName").default("null").isAlpha(),
  check("user").exists(),
  check("password").isStrongPassword(),
  check("email").isEmail(),
  check("phone")
    .isMobilePhone()
    .exists()
    .custom((numberPhone) => {
      if (!validateNumberPhone(numberPhone)) {
        throw new Error("wrong size");
      }
      return true;
    }),
  check("dateBorn").exists().toDate(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

function validateNumberPhone(numberPhone) {
  if (size(numberPhone) == 10 || size(numberPhone) == 7) return true;
}

function size(numberPhone) {
  let acum = 0;
  while (numberPhone != 0) {
    numberPhone = parseInt(numberPhone / 10);
    acum++;
  }
  return acum;
}

module.exports = { validateCreate };
