package app.hackday.controller

import app.hackday.config.CommonConfig
import app.hackday.config.ApplicationConfig
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import static org.springframework.web.bind.annotation.RequestMethod.GET

@RestController
@RequestMapping(value = '/colour', produces = 'application/json')
class ColourController {

    @Autowired ApplicationConfig applicationConfig
    @Autowired CommonConfig commonConfig

    @RequestMapping(method = GET)
    def getColour() {
        [
            'navigation.name': applicationConfig.name,
            'navigation.colour': applicationConfig.colour,
            'common.globalColour': commonConfig.globalColour
        ]
    }
}
