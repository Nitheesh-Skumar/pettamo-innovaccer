const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {

  const data = await getCollection();

  try {

    const res = await data.find({ rel_type: { $eq: 'owner' }});
    const list = Object.keys(res).map(el=>res[el])
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
