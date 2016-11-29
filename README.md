for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do rm -rf app-$name; done
for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do cp -r app-template app-$name; done
for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do find app-$name -type f | xargs sed -i "s/@@template@@/$name/g"; done
for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do app-$name/gradlew -p app-$name clean build; cp app-$name/build/libs/$name-0.0.1.jar app-$name; done
for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do docker build -t hackday/$name app-$name; done

for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do
    rm -rf app-$name
    cp -r app-template app-$name
    find app-$name -type f | xargs sed -i "s/@@template@@/$name/g"
    app-$name/gradlew -p app-$name clean build; cp app-$name/build/libs/$name-0.0.1.jar app-$name
    docker build -t hackday/$name app-$name
done



c=(red blue green yellow orange brown cyan khakhi)
i=0
for name in signin signup servicesignup resetpassword forgotusername captcha navigation express; do
    rm app-$name.properties
    rm app-$name-dev.properties
    rm app-$name-test.properties

    touch app-$name.properties
    touch app-$name-dev.properties
    touch app-$name-test.properties

    echo -e "$name.name=$name\n$name.colour=${c[i]}\ncommon.globalColour=red" > app-$name.properties
    echo -e "$name.name=$name-dev\n$name.colour=${c[i]}\ncommon.globalColour=red" > app-$name-dev.properties
    echo -e  "$name.name=$name-test\n$name.colour=${c[i]}\ncommon.globalColour=red" > app-$name-test.properties

    let "i++"

done
