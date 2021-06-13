--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-06-12 23:30:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3002 (class 1262 OID 24586)
-- Name: stock_application; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE stock_application WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';


ALTER DATABASE stock_application OWNER TO postgres;

\connect stock_application

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 32798)
-- Name: purchased_stock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchased_stock (
    stock_id integer NOT NULL,
    symbol character varying(10) NOT NULL,
    stock_name character varying(50) NOT NULL,
    price numeric,
    day_change numeric,
    percentage_change numeric,
    date character varying(50),
    shares integer,
    user_id integer,
    initial_price numeric
);


ALTER TABLE public.purchased_stock OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 32796)
-- Name: purchased_stock_stock_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchased_stock_stock_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.purchased_stock_stock_id_seq OWNER TO postgres;

--
-- TOC entry 3003 (class 0 OID 0)
-- Dependencies: 202
-- Name: purchased_stock_stock_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchased_stock_stock_id_seq OWNED BY public.purchased_stock.stock_id;


--
-- TOC entry 201 (class 1259 OID 32788)
-- Name: user_credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_credentials (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    user_balance numeric DEFAULT 20000
);


ALTER TABLE public.user_credentials OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 32786)
-- Name: user_credentials_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_credentials_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_credentials_user_id_seq OWNER TO postgres;

--
-- TOC entry 3004 (class 0 OID 0)
-- Dependencies: 200
-- Name: user_credentials_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_credentials_user_id_seq OWNED BY public.user_credentials.user_id;


--
-- TOC entry 2860 (class 2604 OID 32801)
-- Name: purchased_stock stock_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchased_stock ALTER COLUMN stock_id SET DEFAULT nextval('public.purchased_stock_stock_id_seq'::regclass);


--
-- TOC entry 2858 (class 2604 OID 32791)
-- Name: user_credentials user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_credentials ALTER COLUMN user_id SET DEFAULT nextval('public.user_credentials_user_id_seq'::regclass);


--
-- TOC entry 2866 (class 2606 OID 32806)
-- Name: purchased_stock purchased_stock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchased_stock
    ADD CONSTRAINT purchased_stock_pkey PRIMARY KEY (stock_id);


--
-- TOC entry 2862 (class 2606 OID 32793)
-- Name: user_credentials user_credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_credentials
    ADD CONSTRAINT user_credentials_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2864 (class 2606 OID 32795)
-- Name: user_credentials user_credentials_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_credentials
    ADD CONSTRAINT user_credentials_username_key UNIQUE (username);


-- Completed on 2021-06-12 23:30:51

--
-- PostgreSQL database dump complete
--

