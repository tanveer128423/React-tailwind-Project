import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import New from './components/New';
import Collection  from "./components/Collection";
import Customer from "./components/Customer";
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <section>
        <div className="pl-10">
          <Navbar />
        </div>
      </section>
      <section>
        <div className="pl-10 pt-10">
          <Hero />
        </div>
      </section>

      <section>
        <div className="pl-10 pt-10">
          <Collection/>
        </div>
      </section>
      <section>
        <div className="pl-10 pt-10">
          <New />
        </div>
      </section>
      <section>
        <div className="pl-10 pt-10">
          <Customer/>
        </div>
      </section>
      <section>
        <div className=" pt-10">
          <Footer/>
        </div>
      </section>
    </main>
  );
};

export default App;
