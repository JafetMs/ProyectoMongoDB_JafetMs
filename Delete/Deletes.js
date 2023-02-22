//1. Elimina la app Minecraft
db.apps.delete({App:"Minecraft"})

//2. Elimina todas las aplicaciones que tengan menos de mil instalaciones
db.apps.deleteMany({Installs:{$lt:1000 }})

//3. Elimina todas las aplicaciones que den soporte a versiones de android 2.2
db.apps2.deleteMany({"Android Ver":"2.2 and up"})

//4. Elimina aplicaciones que su genero sea Dating y mas de 1,000 reviews
db.apps.deleteMany({Genres:"Dating",Reviews:{$gt:1000}})

//5. Elimina las aplicaciones que sean de paga y tengan un precio de 5 dolares
db.apps2.deleteMany({Type:"Paid",Price:{$gt:5.0}})

