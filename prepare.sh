#!/bin/bash

for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do
    echo "cleaning up..."
    rm -rf app-$name
    echo "copying..."
    cp -r app-template app-$name
    echo "replacing..."
    find app-$name -type f | xargs sed -i "s/@@template@@/$name/g"
    echo "building..."
    gradle -p app-$name clean build; cp app-$name/build/libs/$name-0.0.1.jar app-$name
    echo "dockerising..."
    docker build -t hackday/$name app-$name
done
