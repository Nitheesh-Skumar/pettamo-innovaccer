const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const data = await getCollection();
  const body = JSON.parse(event.body);
  console.log(body)

  try {
    const res = await data.create(body.id,body);

    const list = await data.find( {$and: [{rel_type:  { $eq:'pet' },rel_id:{ $eq:body.rel_id }   }] } );
    console.log(res)

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
