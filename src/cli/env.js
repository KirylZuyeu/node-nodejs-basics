const parseEnv = () => {
    let resultArr = [];
    for (const prop in process.env) {
        if (prop.startsWith('RSS_')) {
            resultArr.push(`${prop}=${process.env[prop]}`);
        }
    }
    console.log(resultArr.join('; '));
};
parseEnv();
