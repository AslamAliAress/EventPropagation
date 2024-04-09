({
    fireAppEvent : function(component, event, helper) {

        var appEvent =$A.get("e.c:customAppEvent");

        appEvent.setParams({
            "MyName": "Aslam Ali"

        });
        appEvent.fire();
    }
})
