package io.github.positoy.naveroauthboard;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

    final static Logger logger = LoggerFactory.getLogger(BoardController.class);
    @GetMapping("/board")
    @ResponseBody
    public String getBoard(@RequestParam(defaultValue="") String code) {
        logger.info("authcode : " + code);
        return "Hello World!";
    }
}
