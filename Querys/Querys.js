    //1.Consulta las aplicaciones que tengan un Rating mayor a 5.0
    db.apps.find({"Rating":{$gte:5.0}}).pretty()

    //2.Consulta por las aplicaciones que sean gratis y las ordena alfabeticamente decrecientemente
    db.apps2.find({"Type":"Free"}).sort({Content: -1}).pretty().limit(3)

    //3.Consulta 3 Aplicaciones de la colleción
    db.apps.find().limit(3).pretty()

    //4.Consulta cuantas aplicaciones existen con un precio entre 3 a 5 dolares
    db.apps.find({"Price":{$gte:3.0,$lt:5.00}}).count()

    //5.Consulta por una Aplicacion llamada HBO MAX
    db.apps.find({App:"HBO MAX"})