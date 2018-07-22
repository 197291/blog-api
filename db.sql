--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.7
-- Dumped by pg_dump version 9.6.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: followers; Type: TABLE; Schema: public; Owner: yuriy
--

CREATE TABLE followers (
    follower bigint NOT NULL,
    following bigint NOT NULL,
    id bigint NOT NULL
);


ALTER TABLE followers OWNER TO yuriy;

--
-- Name: followers_id_seq; Type: SEQUENCE; Schema: public; Owner: yuriy
--

CREATE SEQUENCE followers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE followers_id_seq OWNER TO yuriy;

--
-- Name: followers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yuriy
--

ALTER SEQUENCE followers_id_seq OWNED BY followers.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: yuriy
--

CREATE TABLE posts (
    id bigint NOT NULL,
    title character(120),
    content character varying,
    user_id bigint,
    date date
);


ALTER TABLE posts OWNER TO yuriy;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: yuriy
--

CREATE SEQUENCE posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE posts_id_seq OWNER TO yuriy;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yuriy
--

ALTER SEQUENCE posts_id_seq OWNED BY posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: yuriy
--

CREATE TABLE users (
    id bigint NOT NULL,
    name character varying,
    avatar character varying,
    email character varying,
    password character varying
);


ALTER TABLE users OWNER TO yuriy;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: yuriy
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO yuriy;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yuriy
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: followers id; Type: DEFAULT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY followers ALTER COLUMN id SET DEFAULT nextval('followers_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY posts ALTER COLUMN id SET DEFAULT nextval('posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: followers; Type: TABLE DATA; Schema: public; Owner: yuriy
--

COPY followers (follower, following, id) FROM stdin;
1	4	2
1	3	3
2	4	5
1	2	11
7	1	12
7	4	15
7	3	16
7	5	17
7	6	18
7	8	19
9	2	22
7	2	31
21	5	89
22	5	93
22	1	94
26	1	95
26	5	96
\.


--
-- Name: followers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yuriy
--

SELECT pg_catalog.setval('followers_id_seq', 103, true);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: yuriy
--

COPY posts (id, title, content, user_id, date) FROM stdin;
9	Joe                                                                                                                     	Двои́чное де́рево — иерархическая структура данных, в которой каждый \n    узел имеет не более двух потомков (детей). Как правило, первый называется \n    родительским узлом, а дети называются левым и правым наследниками. Двоичное \n    дерево не является упорядоченным ориентированным деревом.\n\n    Для практических целей обычно используют два подвида двоичных деревьев — \n    двоичное дерево поиска и двоичная куча.	2	\N
11	Read committed (чтение фиксированных данных). 2 Level of Transaction.                                                   	Большинство промышленных СУБД, в частности, Microsoft SQL Server, \n    PostgreSQL и Oracle, по умолчанию используют именно этот уровень. На этом \n    уровне обеспечивается защита от чернового, «грязного» чтения, тем не менее, в \n    процессе работы одной транзакции другая может быть успешно завершена и \n    сделанные ею изменения зафиксированы. В итоге первая транзакция будет работать \n    с другим набором данных.\n\n    Реализация завершённого чтения может основываться на одном из двух подходов: \n    блокировании или версионности.	3	\N
17	Read uncommitted (чтение незафиксированных данных). 1 Level of Transaction.                                             	Низший (первый) уровень изоляции. Он гарантирует только \n    отсутствие потерянных обновлений[1]. Если несколько параллельных \n    транзакций пытаются изменять одну и ту же строку таблицы, то в окончательном \n    варианте строка будет иметь значение, определенное всем набором успешно \n    выполненных транзакций. При этом возможно считывание не только логически \n    несогласованных данных, но и данных, изменения которых ещё не зафиксированы.\n\n    Типичный способ реализации данного уровня изоляции — блокировка данных на \n    время выполнения команды изменения, что гарантирует, что команды изменения \n    одних и тех же строк, запущенные параллельно, фактически выполнятся \n    последовательно, и ни одно из изменений не потеряется. Транзакции, \n    выполняющие только чтение, при данном уровне изоляции никогда не блокируются.	1	2018-04-29
18	Read committed (чтение фиксированных данных). 2 Level of Transaction.                                                   	Большинство промышленных СУБД, в частности, Microsoft SQL Server, \n    PostgreSQL и Oracle, по умолчанию используют именно этот уровень. На этом \n    уровне обеспечивается защита от чернового, «грязного» чтения, тем не менее, в \n    процессе работы одной транзакции другая может быть успешно завершена и \n    сделанные ею изменения зафиксированы. В итоге первая транзакция будет работать \n    с другим набором данных.\n\n    Реализация завершённого чтения может основываться на одном из двух подходов: \n    блокировании или версионности.	3	2018-04-29
20	Serializable (упорядочиваемость) 4 Level of Transaction.                                                                	Самый высокий уровень изолированности; транзакции полностью \n    изолируются друг от друга, каждая выполняется так, как будто параллельных \n    транзакций не существует. Только на этом уровне параллельные транзакции не \n    подвержены эффекту «фантомного чтения».	2	2018-04-29
19	Repeatable read (повторяемость чтения). 3 Level of Transaction.                                                         	Уровень, при котором читающая транзакция «не видит» изменения данных, \n    которые были ею ранее прочитаны. При этом никакая другая транзакция не может \n    изменять данные, читаемые текущей транзакцией, пока та не окончена.\n\n    Блокировки в разделяющем режиме применяются ко всем данным, считываемым любой \n    инструкцией транзакции, и сохраняются до её завершения. Это запрещает другим\n     транзакциям изменять строки, которые были считаны незавершённой транзакцией. \n     Однако другие транзакции могут вставлять новые строки, соответствующие \n     условиям поиска инструкций, содержащихся в текущей транзакции. При повторном \n     запуске инструкции текущей транзакцией будут извлечены новые строки, что \n     приведёт к фантомному чтению. Учитывая то, что разделяющие блокировки \n     сохраняются до завершения транзакции, а не снимаются в конце каждой \n     инструкции, степень параллелизма ниже, чем при уровне изоляции READ COMMITTED. \n     Поэтому пользоваться данным и более высокими уровнями транзакций без \n     необходимости обычно не рекомендуется.	2	2018-04-29
21	Binary search tree                                                                                                      	Двоичное дерево поиска (англ. binary search tree, BST) — это двоичное дерево, для которого выполняются следующие дополнительные условия (свойства дерева поиска):\n\n    Оба поддерева — левое и правое — являются двоичными деревьями поиска.\n    У всех узлов левого поддерева произвольного узла X значения ключей данных меньше, нежели значение ключа данных самого узла X.\n    У всех узлов правого поддерева произвольного узла X значения ключей данных больше либо равны, нежели значение ключа данных самого узла X.\n    Очевидно, данные в каждом узле должны обладать ключами, на которых определена операция сравнения меньше.\n    \n    Как правило, информация, представляющая каждый узел, является записью, а не единственным полем данных. Однако это касается реализации, а не природы двоичного дерева поиска.\n    \n    Для целей реализации двоичное дерево поиска можно определить так:\n    \n    Двоичное дерево состоит из узлов (вершин) — записей вида (data, left, right), где data — некоторые данные, привязанные к узлу, left и right — ссылки на узлы, являющиеся детьми данного узла — левый и правый сыновья соответственно. Для оптимизации алгоритмов конкретные реализации предполагают также определения поля parent в каждом узле (кроме корневого) — ссылки на родительский элемент.\n    Данные (data) обладают ключом (key), на котором определена операция сравнения «меньше». В конкретных реализациях это может быть пара (key, value) — (ключ и значение), или ссылка на такую пару, или простое определение операции сравнения на необходимой структуре данных или ссылке на неё.\n    Для любого узла X выполняются свойства дерева поиска: key[left[X]] < key[X] ≤ key[right[X]], то есть ключи данных родительского узла больше ключей данных левого сына и нестрого меньше ключей данных правого.\n    Двоичное дерево поиска не следует путать с двоичной кучей, построенной по другим правилам.\n    \n    Основным преимуществом двоичного дерева поиска перед другими структурами данных является возможная высокая эффективность реализации основанных на нём алгоритмов поиска и сортировки.\n    \n    Двоичное дерево поиска применяется для построения более абстрактных структур, таких, как множества, мультимножества, ассоциативные массивы.	4	2018-04-29
3	Chandler                                                                                                                	400 Bad Request — сервер обнаружил в запросе клиента синтаксическую\n     ошибку. Появился в HTTP/1.0.\n    401 Unauthorized — для доступа к запрашиваемому ресурсу \n    требуется аутентификация. В заголовке ответ должен содержать \n    поле WWW-Authenticate с перечнем условий аутентификации. \n    Иными словами для доступа к запрашиваемому ресурсу, клиент \n    должен представиться, послав запрос, включив при этом в заголовок \n    сообщения поле Authorization с требуемыми для аутентификации данными.\n    402 Payment Required — предполагается использовать в будущем. В настоящий \n    момент не используется. Этот код предусмотрен для платных пользовательских\n    сервисов, а не для хостинговых компаний. Имеется в виду, что эта ошибка не\n     будет выдана хостинговым провайдером в случае просроченной оплаты его услуг.\n      Зарезервирован, начиная с HTTP/1.1.\n\n    403 Forbidden[18] — сервер понял запрос, но он отказывается его выполнять \n    из-за ограничений в доступе для клиента к указанному ресурсу. Иными словами, \n    клиент не уполномочен совершать операции с запрошенным ресурсом. Если для \n    доступа к ресурсу требуется аутентификация средствами HTTP, то сервер вернёт \n    ответ 401, или 407 при использовании прокси. В противном случае ограничения \n    были заданы администратором сервера или разработчиком веб-приложения и могут \n    быть любыми в зависимости от возможностей используемого программного \n    обеспечения. В любом случае клиенту следует сообщить причины отказа в \n    обработке запроса. Наиболее вероятными причинами ограничения может послужить \n    попытка доступа к системным ресурсам веб-сервера (например, файлам .htaccess \n      или .htpasswd) или к файлам, доступ к которым был закрыт с помощью \n      конфигурационных файлов, требование аутентификации не средствами HTTP, \n      например, для доступа к системе управления содержимым или разделу для \n      зарегистрированных пользователей либо сервер не удовлетворён IP-адресом \n      клиента, например, при блокировках. Появился в HTTP/1.0.\n    404 Not Found[19] — самая распространённая ошибка при пользовании Интернетом,\n     основная причина — ошибка в написании адреса Web-страницы. \n     Сервер понял запрос, но не нашёл соответствующего ресурса по указанному URL. \n     Если серверу известно, что по этому адресу был документ, то ему желательно \n     использовать код 410. Ответ 404 может использоваться вместо 403, если \n     требуется тщательно скрыть от посторонних глаз определённые ресурсы. \n     Появился в HTTP/1.0.	5	\N
22	check                                                                                                                   	Hello world	1	2018-08-15
23	check                                                                                                                   	Hello world	1	2018-08-01
24	just a check                                                                                                            	Ohoooooo!!!	7	\N
25	try 2                                                                                                                   	Earth is mine	9	\N
26	check                                                                                                                   	Hello world	1	2018-08-15
27	check                                                                                                                   	Hello world	1	2018-08-15
28	First                                                                                                                   	test first	21	2018-06-20
29	second                                                                                                                  	second test	21	2018-06-20
30	just testing                                                                                                            	Yahooo	21	2018-06-24
31	cool                                                                                                                    	cool content	21	2018-06-26
32	                                                                                                                        		21	2018-07-01
33	war                                                                                                                     	war is never changet	21	2018-07-03
34	yuriy                                                                                                                   	yana test	22	2018-07-09
35	Tima                                                                                                                    	Post	26	2018-07-09
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yuriy
--

SELECT pg_catalog.setval('posts_id_seq', 35, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yuriy
--

COPY users (id, name, avatar, email, password) FROM stdin;
1	Chandler	avatarChandler	chandler@maiil.com	1111
2	Joe	avatarJoe	joe@maiil.com	1111
3	Ross	avatarRoss	ross@maiil.com	1111
4	Phoebe	avatarPhoebe	phoebe@maiil.com	1111
5	Rachel	avatarRachel	rachel@maiil.com	1111
6	nodejs	\N	1@mail.ru	b59c67bf196a4758191e42f76670ceba
7	JD	\N	jd@mail.com	b59c67bf196a4758191e42f76670ceba
8	superOleg	\N	superOleg@mail.com	b59c67bf196a4758191e42f76670ceba
9	Spok	\N	spok@mail.ru	$2b$10$FJGq4czaMEkFWlg9dgEDOOardkIrJb3wYTa3XndRj21yTTPt4k306
10	kostya	\N	kostya@mail.com	$2b$10$6aAzSNxRKROhafZI9TmcJeeVrRFfWwOMdGz9E2HqY/ZGc/WhYUdBK
21	js	\N	js@mail.com	$2a$10$8dCKknzQzpL2DdDI6JYtmOdodQrzlEZK9epizrNTGN4MX5XMZhdsC
22	yana	\N		1
23		\N		
24	tima	\N	sladkiy	1
25	tima2	\N	sladkiy2	1
26	1	\N	1	1
27	11	\N	1	$2b$10$A.Tn9kLtqMKW1vaPDIk3HuVvN5Hdzldw5iR96vKvYZSjVqyBB14a.
28	2	\N	1	c4ca4238a0b923820dcc509a6f75849b
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yuriy
--

SELECT pg_catalog.setval('users_id_seq', 28, true);


--
-- Name: followers followers_id_key; Type: CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY followers
    ADD CONSTRAINT followers_id_key UNIQUE (id);


--
-- Name: followers followers_pkey; Type: CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY followers
    ADD CONSTRAINT followers_pkey PRIMARY KEY (follower, following);


--
-- Name: posts id; Type: CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY posts
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: followers followers_following_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY followers
    ADD CONSTRAINT followers_following_fkey FOREIGN KEY (following) REFERENCES users(id);


--
-- Name: followers followers_folowers_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY followers
    ADD CONSTRAINT followers_folowers_fkey FOREIGN KEY (follower) REFERENCES users(id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: yuriy
--

ALTER TABLE ONLY posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id);


--
-- PostgreSQL database dump complete
--

