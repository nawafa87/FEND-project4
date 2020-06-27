import "@babel/polyfill";
import e from "express";
const { handleSubmit } = require ('./src/client/js/formHandler');
const { postD  } = require ('./src/client/js/postData');
    test('It should HandleSubmit Function Defined', ()=> {
        expect(handleSubmit).toBeDefined();
    });

    test('It Should be Defiend', ()=>{
        expect(postD).toBeDefined();
    });
