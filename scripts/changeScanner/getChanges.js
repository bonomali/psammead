const { exec } = require('shelljs');

const getChanges = () => {
  exec(`git fetch --all;`, { silent: true });

  const execute = exec(`git diff --name-only origin/latest ./packages`, {
    silent: true,
  }).stdout;

  const changedFiles = execute.split('\n').filter(Boolean);

  const changedPackages = {};

  changedFiles.forEach(fileName => {
    const nameParts = fileName.split('/');
    const packageName = nameParts[2];
    const filePath = nameParts.splice(3).join('/');

    (changedPackages[packageName] = changedPackages[packageName] || []).push(
      filePath,
    );
  });

  return changedPackages;
};

module.exports = getChanges;