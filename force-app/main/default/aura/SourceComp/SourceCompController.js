({
    addNum : function(component, event, helper) {
        var number1 = component.find("num1").get("v.value");
        var number2 = component.find("num2").get("v.value");

        console.log(number1+"Number in source"+ number2);


        var customCompEvent = component.getEvent("customCompEvent");
        customCompEvent.setParams({
            number1 :number1,
            number2 :number2
        });

        customCompEvent.fire();
    }
})
