// Contrôler la validité du password => envoie au controler

const regexValidator = {
    uppercase: { regex: /[A-Z]/, description: 'At least one uppercase letter' },
    lowercase: { regex: /[a-z]/, description: 'At least one lowercase letter' },
    digit: { regex: /[0-9]/, description: 'At least one digit' },
    special: { regex: /[^A-Za-z0-9]/, description: 'At least one special symbol' },
    length: { test: e => e.length > 2, description: 'Should be more than 2 characters' }
}

const checkValidPassword = (password) => {
    return Object.entries(regexValidator).flatMap(([name, { test, regex }]) => {
        const isValid = test ? test(password) : regex.test(password);
        return isValid ? [] : [name];
      });
}

exports.passwordChecked = (req, res, next) => {
    if (!checkValidPassword(req.body.password).length) {
        next()
    } else {
        return res.status(400).json(
            {error: "invalid password", testFailed: checkValidPassword(req.body.password)}
        );
    }
}