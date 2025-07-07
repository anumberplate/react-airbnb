function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key = {item.id}
                item = {item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}