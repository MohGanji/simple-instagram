For the project to work on your system, you may want to add these two aliasaes in your `/etc/hosts` file:

```
127.0.0.1	mongo
```

to see a demo, you can add some data into database by adding these data in the corresponding collections:

database name: `sinsta`

```
db.getCollection('posts').insertMany([
{
    "_id" : ObjectId("5e05f9622620e5e4666ab456"),
    "user" : "Dinesh",
    "sender" : "asas",
    "description" : "Look what Gilfoyle just told me",
    "image" : "https://picsum.photos/200",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05f9622620e5e4666ab457"),
    "user" : "Gilfoyle",
    "sender" : "asas",
    "description" : "My AI is chatting with Dinesh, He thinks that it's me",
    "image" : "https://picsum.photos/240",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05f9622620e5e4666ab458"),
    "user" : "Richard",
    "sender" : "asas",
    "description" : "Middle out compression algorithm",
    "image" : "https://picsum.photos/260",
    "creationDate" : new Date()
}
])
```

```
db.getCollection('comments').insertMany([
{
    "_id" : ObjectId("5e05fc722620e5e4666ab459"),
    "text" : "You dumb",
    "postId" : ObjectId("5e05f9622620e5e4666ab456"),
    "user" : "Richard",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05fc722620e5e4666ab45a"),
    "text" : "Really?",
    "postId" : ObjectId("5e05f9622620e5e4666ab456"),
    "user" : "Jared",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05fc722620e5e4666ab45b"),
    "text" : "I don't think that's him",
    "postId" : ObjectId("5e05f9622620e5e4666ab456"),
    "user" : "Gabriel",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05fc722620e5e4666ab45c"),
    "text" : "HAHAHA",
    "postId" : ObjectId("5e05f9622620e5e4666ab457"),
    "user" : "Jian Yang",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05fc722620e5e4666ab45d"),
    "text" : "good job on that",
    "postId" : ObjectId("5e05f9622620e5e4666ab457"),
    "user" : "Richard",
    "creationDate" : new Date()
},
{
    "_id" : ObjectId("5e05fc722620e5e4666ab45e"),
    "text" : "You are a genius",
    "postId" : ObjectId("5e05f9622620e5e4666ab458"),
    "user" : "Jared",
    "creationDate" : new Date()
}
])
```
