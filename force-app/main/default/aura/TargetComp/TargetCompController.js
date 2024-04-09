({
    handlerCompEvent : function(component, event, helper) {

        var number1 = event.getParam("number1");
        var number2 = event.getParam("number2");

        var sum=parseInt(number1)+parseInt(number2);
        component.set("v.sum", sum);

    }
})
