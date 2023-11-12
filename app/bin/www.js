"use strict"

const app = require("../app");
const PORT = process.env.PORT;
const logger = require("../src/config/logger");

app.listen(PORT, () => {
    logger.info(`server running at port:${PORT}`);
}) 