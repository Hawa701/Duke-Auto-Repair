"use client";

import { business } from "@/lib/business";
import Icon from "./icon";

type ContactFormProps = { action?: string };

export default function ContactForm({ action }: ContactFormProps) {
  return (
    <form
