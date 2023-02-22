 // 1. Cambiar el valor de la clave de Android Ver a Android V
db.apps.updateMany({Type:"Free"},{$rename:{"Android Ver": 'Android V'}})

//2. Supongamos que nuestra aplicacion subira de precio por lo tanto hay que aumentarle en la base de datos
db.appsMain.update({App:"Minecraft"},{$set: {Price:15,"Current Ver": 1.20}})

//3. Supongamos que nuestros datos no fueran insertados de manera correcta por lo tanto podemos actualizar
//todo el documento completo de la sig manera
db.appsMain.update({App:"Minecraft"},
    {
        "App" : "Minecraft PE",
        "Category" : "FAMILY",
        "Rating" : 5.0,
        "Reviews" : 5000000,
        "Size" : "1 GB",
        "Installs" : 10000000,
        "Type" : "Paid",
        "Price" : 6.99,
        "Content Rating" : "Everyone 12+",
        "Genres" : "Arcade;Action & Adventure",
        "Last Updated" : "December 5, 2022",
        "Current Ver" : "1.21",
        "Android Ver" : "7.0 and up"  
    })


//4.En este update actualizalos las aplicaciones que tienen un rating de 5  y las volvemos de paga con precio de 5 dólares

db.appsMain.updateMany({Rating:5}, {$set:{Type:"Paid",Price:5.00}}).count()

//5. Mediantes una expresion regular actualiza todas las Apps de Facebok a apps de paga y asiganarle un precio

// Consultamos cuantas app hay relacionadas a Faceboon con una expresion regular
    db.appsMain.find({App:{$regex:"Facebook"}}).count()
// Hacemos el update con la expresion regular
db.appsMain.updateMany({App:{$regex:"Facebook"}},{$set:{Type:"Paid",Price:25.00}})

//Hacemos una consulta mediante expresiones regulares y verificamos
db.appsMain.find({App:{$regex:"Facebook"}}).pretty().limit(2)