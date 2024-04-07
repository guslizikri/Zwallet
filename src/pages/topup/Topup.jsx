import React from 'react';
import useApi from '../../utils/useApi';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import Sidebar from '../../component/NewSidebar';
import Card from '../../component/CardTopup';
import MainHeader from '../../component/ProfileHead';
import { useState } from 'react';

function Home() {
  const api = useApi();

  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const handleOnChange = (e) => {
    setBalance(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    api
      .patch('/topup', { balance: balance })
      .then((res) => {
        alert(res.data.message);
        navigate('/home');
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />
        <main className="bg-white w-full rounded-3xl shadow-lg px-7 pt-7 pb-12">
          <section className="flex justify-between">
            <MainHeader title={'How to Top-Up'} />

            <form className="flex gap-2">
              <div className="">
                <input
                  id="topup"
                  name="topup"
                  type="number"
                  required
                  onChange={handleOnChange}
                  className="block w-[168px] focus:outline-none rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                onClick={submitHandler}
                className="flex w-full justify-center rounded-md bg-indigo-600  p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Top-Up Dev Only
              </button>
            </form>
          </section>

          <div className="mt-5 grid gap-y-5">
            <Card
              step="1"
              content="Go to the nearest ATM or you can use E-Banking."
            />
            <Card
              step="2"
              content="Type your security number on the ATM or E-Banking."
            />
            <Card step="3" content="Select “Transfer” in the menu" />
            <Card
              step="4"
              content="Type the virtual account number that we provide you at the top."
            />
            <Card
              step="5"
              content="Type the amount of the money you want to top up."
            />
            <Card step="6" content="Read the summary details" />
            <Card step="7" content="Press transfer / top up" />
            <Card
              step="8"
              content="You can see your money in Zwallet within 3 hours."
            />
          </div>
        </main>
      </section>
    </div>
  );
}

export default Home;
