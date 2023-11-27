## RESTfull APIS

**RESTful APIs** (Representational State Transfer APIs) are a type of web service architecture designed to facilitate communication and data exchange between systems over the internet. They adhere to the principles of REST, which is an architectural style introduced by **Roy Fielding** in his doctoral dissertation in 2000.

<img src = "" alt="image">


In HTTP there are five methods that are commonly used in a REST-based Architecture .

 **POST**   -->The POST verb is most often utilized to **create** new resources.

 **NOTE:** POST is neither safe nor **idempotent**. 

 **GET**   -->The HTTP GET method is used to **read (or retrieve)** a representation of a resource.

 **PUT**   -->It is used for **updating the capabilities**.(all resourses required)

  **PATCH**  -->It is used for updating the capabilities.(specific resource required)
  
 **DELETE** -->It is used to **delete** a resource identified by a URI

 **Idempotence**: An idempotent HTTP method is a HTTP method that can be called many times without different outcomes. It would not matter if the method is called only once, or ten times over. The result should be the same. Again, this only applies to the result, not the resource itself. 