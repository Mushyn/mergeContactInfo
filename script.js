//Fusionnez les informations de contact reçues dans "infos1" et "infos2" dans un seul et unique tableau d'objet.

//Vous devez vous baser sur la propriété "name" qui sera toujours présente dans les deux tableaux.

//Le tableau final devra être retourné par la fonction mergeContactInfos.


function mergeContactsInfos(infos1, infos2) {
    let infos = [];

    // Insert your code her
    //Etape 1 : Charger les éléments de infos1 dans infos
    infos1.forEach(element => {
        infos.push(element);
    });

    // fin du chargement de infos 1 dans infos

    //Etape 2 : Pour chaque élément de info2, trouver la position de l'élément correspondant dans infos et y copier la deuxième clé

    infos2.forEach(element => {
        
        infos.forEach(key => {
            
            if(key[Object.keys(key)[0]] === element[Object.keys(element)[0]]) {
                key[Object.keys(element)[1]] = element[Object.keys(element)[1]];
            };
        })

    });

    return infos;
}

console.log(JSON.stringify(mergeContactsInfos(
    [{ name: 'John Doe', phone: '0123456789' }, { name: 'Jane Doe', age: 42 }, { name: 'Jack Doe', phone: '0987654321' }],
    [{ name: 'Jane Doe', city: 'Paris' }, { name: 'John Doe', age: 44 }, { name: 'Jack Doe', favorite: true }]
)));
// Expected: [{"name":"John Doe","phone":"0123456789","age":44},{"name":"Jane Doe","age":42,"city":"Paris"},{"name":"Jack Doe","phone":"0987654321","favorite":true}]

console.log(JSON.stringify(mergeContactsInfos(
    [{ name: 'Pierre', score: 15 }, { name: 'Paul', bestFriend: 'Jack' }],
    [{ name: 'Paul', money: 14560 }, { name: 'Pierre', color: 'red' }],
)));
// Expected: [{"name":"Pierre","score":15,"color":"red"},{"name":"Paul","bestFriend":"Jack","money":14560}]*/