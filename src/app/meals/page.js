import React, { Suspense } from "react";
import calsses from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../../../components/meals/meals-grid";
import { getMeals } from "../../../lib/meals";

export const metadata = {
  title: "Browse Meals",
  description: "Delicious melas, shared by a food-loving community.",
};

async function FetchMeals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={calsses.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={calsses.highlights}>by you</span>
        </h1>
        <p>
          Choose your favortite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={calsses.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className="">
        <Suspense
          fallback={<p className={calsses.loading}>Fetching meals...</p>}
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
}
