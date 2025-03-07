"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { loadGoogleRating, type GoogleRatingData } from "@/lib/google-reviews";
