import React from "react";
import type { JSX } from "react";
import {useTranslations} from 'next-intl';
import Homepage from "./home/page";

export default function Home(): JSX.Element {
 
  return (
    <div>
      <Homepage />
      
    </div>
  );
}
