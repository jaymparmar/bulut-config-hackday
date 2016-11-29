FROM java:8
VOLUME /tmp
RUN echo " IdentityFile ~/.ssh/id_rsa" >> /etc/ssh/ssh_config
RUN echo "10.20.94.53 git.id.bskyb.com" >> /etc/hosts
ADD configserver-0.0.1.jar app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]
