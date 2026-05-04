-----Issue 1
Problem - err: docker: unknown command: docker compose
Root cause - our server has Docker 29 but it is missing the Compose plugin. 
How found - by using <docker compose version> command
Fix applied - Replaced docker compose with (with hyphen) docker-compose
Result - It output the version correctly (docker-compose version 1.29.2, build unknown
                                        docker-py version: 5.0.3
                                        CPython version: 3.12.3
                                        OpenSSL version: OpenSSL 3.0.13 30 Jan 2024)



-----Issue 2
Problem - npm error Missing script: "build"
Root cause - Package.json doesn't have a "build" script defined for Next.js app
How found - By monitoring the github actions deploy step output then check the package.json file
Fix applied - added the scripts field with dev,build and start
Result  - It passes the build step in github actions



-----Issue 3
Problem - Error: Couldn't find any `pages` or `app` directory.
Root cause - The repo is empty, we need to create a Next.js app structire to run this on server
How found - By monitoring the github actions deploy step output then check the package.json file
Fix applied - Created a directory as "app" and added the sample header
Result  - It passes the root layout validation step in github actions


-----Issue 4
Problem - DB port 3306 already in use in production in a compose file
Root cause - Anothet container is using it
How found - By running the docker-compose and find it in logs
Fix applied - Removed the port section
Result  - Passes the docker compose run