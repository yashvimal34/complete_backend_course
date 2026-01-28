function fetchActivityLogs() {
    return Promise.resolve(
        [
            {id: 1, action: "User logged in", time: "09:00"},    
            {id: 2, action: "View dashboard", time: "09:05"},    
            {id: 3, action: "Updated Profile", time: "09:10"},    
            {id: 4, action: "Logged Out", time: "09:15"},    
        ]
    );
}