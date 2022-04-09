const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = event.body;
  console.log(body)
  try {
    const list = await data.delete(body);
    return {
      statusCode: 200,
      body: JSON.stringify(list),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
