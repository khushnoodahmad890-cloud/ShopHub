--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

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
-- Name: order_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL
);


ALTER TABLE public.order_items OWNER TO postgres;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_items_id_seq OWNER TO postgres;

--
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer,
    total numeric(10,2) NOT NULL,
    status character varying(50) DEFAULT 'pending'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    image text,
    category character varying(100),
    description text,
    stock integer DEFAULT 0,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    role character varying(20) DEFAULT 'user'::character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: order_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_items (id, order_id, product_id, quantity, price) FROM stdin;
1	1	1	2	49.99
2	1	3	1	129.99
3	2	1	4	49.99
4	2	2	1	79.99
5	2	3	1	129.99
7	3	1	1	49.99
8	3	2	1	79.99
9	3	3	1	129.99
11	4	1	1	49.99
12	4	2	1	79.99
13	4	3	1	129.99
15	5	1	37	49.99
16	6	5	5	45.99
17	7	1	1	49.99
18	7	2	1	79.99
19	7	3	1	129.99
20	7	4	1	34.99
21	8	\N	1	49.99
22	8	\N	1	79.99
23	8	\N	1	129.99
24	8	\N	1	34.99
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, user_id, total, status, created_at) FROM stdin;
3	2	359.97	pending	2026-07-22 03:57:15.213758
5	2	1849.63	pending	2026-07-23 00:19:41.286121
1	1	229.97	Shipped	2026-07-22 03:13:00.290584
8	2	324.46	Processing	2026-07-23 02:02:26.776875
7	2	294.96	Shipped	2026-07-23 01:46:18.056698
6	2	229.95	Delivered	2026-07-23 01:26:50.019428
4	2	359.97	Cancelled	2026-07-22 03:59:03.507871
2	2	509.94	Processing	2026-07-22 03:24:46.383182
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, title, price, image, category, description, stock, created_at) FROM stdin;
1	Wireless Headphones	49.99	/products/headphones.jpg	Electronics	Premium wireless headphones with noise cancellation	20	2026-07-21 19:18:24.85536
2	Gaming Keyboard	79.99	/products/keyboard.jpg	Electronics	Mechanical RGB gaming keyboard	15	2026-07-21 19:18:24.85536
3	Smart Watch	129.99	/products/watch.jpg	Accessories	Fitness tracking smartwatch	30	2026-07-21 19:18:24.85536
4	Bluetooth Speaker	34.99	/products/speaker.jpg	Electronics	Portable waterproof Bluetooth speaker	25	2026-07-22 07:39:08.977132
5	Laptop Backpack	45.99	/products/backpack.jpg	Accessories	Water-resistant backpack with laptop compartment	18	2026-07-22 07:39:08.977132
6	Wireless Mouse	19.99	/products/mouse.jpg	Electronics	Ergonomic wireless mouse with USB receiver	50	2026-07-22 07:39:08.977132
7	USB-C Hub	29.99	/products/usb-hub.jpg	Electronics	7-in-1 USB-C hub with HDMI and card reader	22	2026-07-22 07:39:08.977132
8	Yoga Mat	24.99	/products/yoga-mat.jpg	Fitness	Non-slip eco-friendly yoga mat	35	2026-07-22 07:39:08.977132
9	Phone Case	14.99	/products/phone-case.jpg	Accessories	Shockproof clear phone case	60	2026-07-22 07:39:08.977132
10	Desk Lamp	32.99	/products/desk-lamp.jpg	Home	LED desk lamp with adjustable brightness	20	2026-07-22 07:39:08.977132
11	Noise Cancelling Earbuds	59.99	/products/earbuds.jpg	Electronics	True wireless earbuds with active noise cancellation	40	2026-07-22 07:43:23.096114
12	4K Webcam	44.99	/products/webcam.jpg	Electronics	Ultra HD webcam with built-in microphone	30	2026-07-22 07:43:23.096114
13	Portable SSD 1TB	89.99	/products/ssd.jpg	Electronics	High-speed portable solid state drive	25	2026-07-22 07:43:23.096114
14	Mechanical Pencil Set	9.99	/products/pencils.jpg	Office	Set of 5 mechanical pencils with refills	75	2026-07-22 07:43:23.096114
15	Standing Desk Converter	129.99	/products/desk-converter.jpg	Home	Adjustable height standing desk converter	15	2026-07-22 07:43:23.096114
16	Ceramic Coffee Mug	12.99	/products/mug.jpg	Home	Minimalist ceramic coffee mug, 350ml	80	2026-07-22 07:43:23.096114
17	Resistance Bands Set	18.99	/products/bands.jpg	Fitness	Set of 5 resistance bands with varying tension	45	2026-07-22 07:43:23.096114
18	Water Bottle 1L	16.99	/products/bottle.jpg	Fitness	Insulated stainless steel water bottle	55	2026-07-22 07:43:23.096114
19	Bluetooth Keyboard	34.99	/products/bt-keyboard.jpg	Electronics	Compact wireless keyboard for tablets and phones	28	2026-07-22 07:43:23.096114
20	Cable Organizer	8.99	/products/cable-organizer.jpg	Accessories	Silicone cable clips, pack of 10	90	2026-07-22 07:43:23.096114
21	Travel Pillow	15.99	/products/travel-pillow.jpg	Travel	Memory foam neck pillow for travel	38	2026-07-22 07:43:23.096114
22	Sunglasses	22.99	/products/sunglasses.jpg	Accessories	Polarized UV-protection sunglasses	42	2026-07-22 07:43:23.096114
23	Notebook Set	11.99	/products/notebooks.jpg	Office	Pack of 3 hardcover ruled notebooks	65	2026-07-22 07:43:23.096114
24	Desk Organizer Tray	19.99	/products/desk-tray.jpg	Office	Multi-compartment desk organizer	33	2026-07-22 07:43:23.096114
25	Power Bank 20000mAh	39.99	/products/power-bank.jpg	Electronics	Fast-charging portable power bank	36	2026-07-22 07:43:23.096114
26	Wall Clock	27.99	/products/wall-clock.jpg	Home	Minimalist silent wall clock	20	2026-07-22 07:43:23.096114
27	Throw Blanket	29.99	/products/blanket.jpg	Home	Soft fleece throw blanket, 50x60 inches	24	2026-07-22 07:43:23.096114
28	Air Purifier	79.99	/products/air-purifier.jpg	Home	HEPA filter air purifier for small rooms	12	2026-07-22 07:43:23.096114
29	Jump Rope	9.99	/products/jump-rope.jpg	Fitness	Adjustable speed jump rope	50	2026-07-22 07:43:23.096114
30	Foam Roller	21.99	/products/foam-roller.jpg	Fitness	High-density foam roller for muscle recovery	27	2026-07-22 07:43:23.096114
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, created_at, role) FROM stdin;
1	Khush	khush@example.com	$2b$10$SeMBS3vAePMEVoPQeKK0qeFsBisODVlsw90NxiqN2M.AddOOExodO	2026-07-22 01:30:46.983596	user
2	khushnood	khushnood@gmail.com	$2b$10$QaOlB8UlltrLmAlQwcgUJuOL5ptrz93BReTUbY1Rnl0505wVH.E2a	2026-07-22 01:50:43.980834	admin
\.


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_items_id_seq', 24, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 8, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 30, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: order_items order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

