package app.config

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.config.server.EnableConfigServer

import static org.springframework.boot.SpringApplication.run

@SpringBootApplication
@EnableConfigServer
class ConfigServer {

    static void main(String[] args) {
        run ConfigServer, args
    }
}
