#**The Builder Design Pattern**
The design pattern we will be going over is commonly known as the Builder design pattern, a pattern used to help construct complex objects. It helps separate object construction from its representation, which will help us reuse this to create different representations.
It lays out the following steps:
##**The base class contains the business logic**
It also receives the object that was created and proceeds to set the values.
##**Separate the code that is responsible for creating objects into builders, which ultimately are also just objects/classes**
All of these builders will be responsible for defining the steps to construct the complex objects.
##**Can use an optional class, called the Director**
Directors are involved in defining methods ensuring that steps are executed in a specific order to build the commonly constructed objects.
