describe("Automation Task Test", () => {
    it("Test Home Page Title", () => {
        cy.visit("https://www.apollo.io/");
        cy.wait(5000);
        cy.get("title")
        .should("contain", "Sales Intelligence and Engagement Platform | Apollo");
    })
})