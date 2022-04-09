const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)
  try {

    const list = await data.find( {rel_type:  { $eq:'pet' },rel_id:{ $eq:body.rel_id }   });

    return {
      statusCode: 200,
      body: JSON.stringify(list),
    };
  } catch (e) {
    console.log(e)
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
