---
sidebar_label: "Функции"
sidebar_position: 32
---

# Функции {#funktsii}

Функции бывают как минимум\* двух видов - обычные функции (называются просто, функциями) и агрегатные функции. Это совершенно разные вещи. Обычные функции работают так, как будто применяются к каждой строке по отдельности (для каждой строки, результат вычисления функции не зависит от других строк). Агрегатные функции аккумулируют множество значений из разных строк (то есть, зависят от целого множества строк).

В этом разделе речь пойдёт об обычных функциях. Для агрегатных функций, смотрите раздел «Агрегатные функции».

\* - есть ещё третий вид функций, к которым относится функция arrayJoin; также можно отдельно иметь ввиду табличные функции.\*

## Строгая типизация {#strogaia-tipizatsiia}

В ClickHouse, в отличие от стандартного SQL, типизация является строгой. То есть, не производится неявных преобразований между типами. Все функции работают для определённого набора типов. Это значит, что иногда вам придётся использовать функции преобразования типов.

## Склейка одинаковых выражений {#common-subexpression-elimination}

Все выражения в запросе, имеющие одинаковые AST (одинаковую запись или одинаковый результат синтаксического разбора), считаются имеющими одинаковые значения. Такие выражения склеиваются и исполняются один раз. Одинаковые подзапросы тоже склеиваются.

## Типы результата {#tipy-rezultata}

Все функции возвращают одно (не несколько, не ноль) значение в качестве результата. Тип результата обычно определяется только типами аргументов, но не значениями аргументов. Исключение - функция tupleElement (оператор a.N), а также функция toFixedString.

## Константы {#konstanty}

Для простоты, некоторые функции могут работать только с константами в качестве некоторых аргументов. Например, правый аргумент оператора LIKE должен быть константой.
Почти все функции возвращают константу для константных аргументов. Исключение - функции генерации случайных чисел.
Функция now возвращает разные значения для запросов, выполненных в разное время, но результат считается константой, так как константность важна лишь в пределах одного запроса.
Константное выражение также считается константой (например, правую часть оператора LIKE можно сконструировать из нескольких констант).

Функции могут быть по-разному реализованы для константных и не константных аргументов (выполняется разный код). Но результат работы для константы и полноценного столбца, содержащего только одно такое же значение, должен совпадать.

## Обработка NULL {#obrabotka-null}

Функции имеют следующие виды поведения:

-   Если хотя бы один из аргументов функции — `NULL`, то результат функции тоже `NULL`.
-   Специальное поведение, указанное в описании каждой функции отдельно. В исходном коде ClickHouse такие функции можно определить по свойству `UseDefaultImplementationForNulls=false`.

## Неизменяемость {#neizmeniaemost}

Функции не могут поменять значения своих аргументов - любые изменения возвращаются в качестве результата. Соответственно, от порядка записи функций в запросе, результат вычислений отдельных функций не зависит.

## Функции высшего порядка, оператор `->` и функция lambda(params, expr)  {#higher-order-functions}

Функции высшего порядка, в качестве своего функционального аргумента могут принимать только лямбда-функции. Чтобы передать лямбда-функцию в функцию высшего порядка, используйте оператор `->`. Слева от стрелочки стоит формальный параметр — произвольный идентификатор, или несколько формальных параметров — произвольные идентификаторы в кортеже. Справа от стрелочки стоит выражение, в котором могут использоваться эти формальные параметры, а также любые столбцы таблицы.

Примеры:
```
x -> 2 * x
str -> str != Referer
```

В функции высшего порядка может быть передана лямбда-функция, принимающая несколько аргументов. В этом случае в функцию высшего порядка передаётся несколько массивов одинаковой длины, которым эти аргументы будут соответствовать.

Для некоторых функций первый аргумент (лямбда-функция) может отсутствовать. В этом случае подразумевается тождественное отображение.

## Пользовательские функции SQL {#user-defined-functions}

Функции можно создавать из лямбда выражений с помощью [CREATE FUNCTION](../statements/create/function.md). Для удаления таких функций используется выражение [DROP FUNCTION](../statements/drop.md#drop-function).

## Исполняемые пользовательские функции {#executable-user-defined-functions}

ClickHouse может вызывать любую внешнюю исполняемую программу или скрипт для обработки данных.

Конфигурация исполняемых пользовательских функций может находиться в одном или нескольких xml-файлах. Путь к конфигурации указывается в параметре [user_defined_executable_functions_config](../../operations/server-configuration-parameters/settings.md#server_configuration_parameters-user_defined_executable_functions_config).

Конфигурация функции содержит следующие настройки:

-   `name` - имя функции.
-   `command` - имя скрипта для выполнения или команды, если `execute_direct` равно false.
-   `argument` - описание аргумента, содержащее его тип во вложенной настройке `type`, и опционально его имя во вложенной настройке `name`. Каждый аргумент описывается отдельно. Указание имени для аргумента необходимо, если имена аргументов являются частью сериализации для пользовательского формата функции, например [Native](../../interfaces/formats.md#native) или [JSONEachRow](../../interfaces/formats.md#jsoneachrow). Значение имени аргумента по умолчанию `c` + номер аргумента.
-   `format` - [формат](../../interfaces/formats.md) передачи аргументов.
-   `return_type` - тип возвращаемого значения.
-   `return_name` - имя возвращаемого значения. Указание имени возвращаемого значения необходимо, если имя возвращаемого значения является частью сериализации для пользовательского формата функции, например [Native](../../interfaces/formats.md#native) или [JSONEachRow](../../interfaces/formats.md#jsoneachrow). Необязательный. Значение по умолчанию — `result`.
-   `type` - вариант запуска команды. Если задан вариант `executable`, то запускается одна команда. При указании `executable_pool` создается пул команд.
-   `max_command_execution_time` - максимальное время в секундах, которое отводится на обработку блока данных. Эта настройка применима только для команд с вариантом запуска `executable_pool`. Необязательная настройка. Значение по умолчанию `10`.
-   `command_termination_timeout` - максимальное время завершения команды в секундах после закрытия конвейера. Если команда не завершается, то процессу отправляется сигнал `SIGTERM`. Эта настройка применима только для команд с вариантом запуска `executable_pool`. Необязательная настройка. Значение по умолчанию `10`.
-   `command_read_timeout` - время ожидания чтения данных из команды stdout в миллисекундах. Значение по умолчанию 10000. Необязательная настройка.
-   `command_write_timeout` - время ожидания записи данных в команду stdin в миллисекундах. Значение по умолчанию 10000. Необязательная настройка.
-   `pool_size` - размер пула команд. Необязательная настройка. Значение по умолчанию `16`.
-   `send_chunk_header` - управляет отправкой количества строк перед отправкой блока данных для обработки. Необязательная настройка. Значение по умолчанию `false`.
-   `execute_direct` - Если `execute_direct` = `1`, то будет произведен поиск `command` в папке user_scripts, указанной в [user_scripts_path](../../operations/server-configuration-parameters/settings.md#server_configuration_parameters-user_scripts_path). Дополнительные аргументы скрипта можно указать с помощью разделителя пробелов. Пример: `script_name arg1 arg2`. Если `execute_direct` = `0`, `command` передается как аргумент для `bin/sh -c`. Значение по умолчанию `1`. Необязательный параметр.
-   `lifetime` - интервал перезагрузки функций в секундах. Если задан `0`, то функция не перезагружается.

Команда должна читать аргументы из `STDIN` и выводить результат в `STDOUT`. Обработка должна выполняться в цикле. То есть после обработки группы аргументов команда должна ожидать следующую группу.

**Пример**

Создание `test_function` с использованием конфигурации XML.
Файл test_function.xml.
```xml
<functions>
    <function>
        <type>executable</type>
        <name>test_function_python</name>
        <return_type>String</return_type>
        <argument>
            <type>UInt64</type>
            <name>value</name>
        </argument>
        <format>TabSeparated</format>
        <command>test_function.py</command>
    </function>
</functions>
```

Файл скрипта внутри папки `user_scripts` `test_function.py`.

```python
#!/usr/bin/python3

import sys

if __name__ == '__main__':
    for line in sys.stdin:
        print("Value " + line, end='')
        sys.stdout.flush()
```

Запрос:

``` sql
SELECT test_function_python(toUInt64(2));
```

Результат:

``` text
┌─test_function_python(2)─┐
│ Value 2                 │
└─────────────────────────┘
```

Создание `test_function_sum`, указав для `execute_direct` значение `0`, используя конфигурацию XML.
File test_function.xml.
```xml
<functions>
    <function>
        <type>executable</type>
        <name>test_function_sum</name>
        <return_type>UInt64</return_type>
        <argument>
            <type>UInt64</type>
            <name>lhs</name>
        </argument>
        <argument>
            <type>UInt64</type>
            <name>rhs</name>
        </argument>
        <format>TabSeparated</format>
        <command>cd /; clickhouse-local --input-format TabSeparated --output-format TabSeparated --structure 'x UInt64, y UInt64' --query "SELECT x + y FROM table"</command>
        <execute_direct>0</execute_direct>
    </function>
</functions>
```

Запрос:

``` sql
SELECT test_function_sum(2, 2);
```

Результат:

``` text
┌─test_function_sum(2, 2)─┐
│                       4 │
└─────────────────────────┘
```

Создание `test_function_sum_json` с именноваными аргументами и форматом [JSONEachRow](../../interfaces/formats.md#jsoneachrow) с использованием конфигурации XML.
Файл test_function.xml.
```xml
<functions>
    <function>
        <type>executable</type>
        <name>test_function_sum_json</name>
        <return_type>UInt64</return_type>
        <return_name>result_name</return_name>
        <argument>
            <type>UInt64</type>
            <name>argument_1</name>
        </argument>
        <argument>
            <type>UInt64</type>
            <name>argument_2</name>
        </argument>
        <format>JSONEachRow</format>
        <command>test_function_sum_json.py</command>
    </function>
</functions>
```

Файл скрипта внутри папки `user_scripts` `test_function_sum_json.py`.

```python
#!/usr/bin/python3

import sys
import json

if __name__ == '__main__':
    for line in sys.stdin:
        value = json.loads(line)
        first_arg = int(value['argument_1'])
        second_arg = int(value['argument_2'])
        result = {'result_name': first_arg + second_arg}
        print(json.dumps(result), end='\n')
        sys.stdout.flush()
```

Запрос:

``` sql
SELECT test_function_sum_json(2, 2);
```

Результат:

``` text
┌─test_function_sum_json(2, 2)─┐
│                            4 │
└──────────────────────────────┘
```

Исполняемые пользовательские функции могут принимать константные параметры, их конфигурация является частью настройки `command` (работает только для пользовательских функций с типом `executable`).
Файл test_function_parameter_python.xml.
```xml
<functions>
    <function>
        <type>executable</type>
        <name>test_function_parameter_python</name>
        <return_type>String</return_type>
        <argument>
            <type>UInt64</type>
        </argument>
        <format>TabSeparated</format>
        <command>test_function_parameter_python.py {test_parameter:UInt64}</command>
    </function>
</functions>
```

Файл скрипта внутри папки `user_scripts` `test_function_parameter_python.py`.

```python
#!/usr/bin/python3

import sys

if __name__ == "__main__":
    for line in sys.stdin:
        print("Parameter " + str(sys.argv[1]) + " value " + str(line), end="")
        sys.stdout.flush()
```

Query:

``` sql
SELECT test_function_parameter_python(1)(2);
```

Result:

``` text
┌─test_function_parameter_python(1)(2)─┐
│ Parameter 1 value 2                  │
└──────────────────────────────────────┘
```

## Обработка ошибок {#obrabotka-oshibok}

Некоторые функции могут кидать исключения в случае ошибочных данных. В этом случае, выполнение запроса прерывается, и текст ошибки выводится клиенту. При распределённой обработке запроса, при возникновении исключения на одном из серверов, на другие серверы пытается отправиться просьба тоже прервать выполнение запроса.

## Вычисление выражений-аргументов {#vychislenie-vyrazhenii-argumentov}

В почти всех языках программирования, для некоторых операторов может не вычисляться один из аргументов. Обычно - для операторов `&&`, `||`, `?:`.
Но в ClickHouse, аргументы функций (операторов) вычисляются всегда. Это связано с тем, что вычисления производятся не по отдельности для каждой строки, а сразу для целых кусочков столбцов.

## Выполнение функций при распределённой обработке запроса {#vypolnenie-funktsii-pri-raspredelionnoi-obrabotke-zaprosa}

При распределённой обработке запроса, как можно большая часть стадий выполнения запроса производится на удалённых серверах, а оставшиеся стадии (слияние промежуточных результатов и всё, что дальше) - на сервере-инициаторе запроса.

Это значит, что выполнение функций может производиться на разных серверах.
Например, в запросе `SELECT f(sum(g(x))) FROM distributed_table GROUP BY h(y),`
- если `distributed_table` имеет хотя бы два шарда, то функции g и h выполняются на удалённых серверах, а функция f - на сервере-инициаторе запроса;
- если `distributed_table` имеет только один шард, то все функции f, g, h выполняются на сервере этого шарда.

Обычно результат выполнения функции не зависит от того, на каком сервере её выполнить. Но иногда это довольно важно.
Например, функции, работающие со словарями, будут использовать словарь, присутствующий на том сервере, на котором они выполняются.
Другой пример - функция `hostName` вернёт имя сервера, на котором она выполняется, и это можно использовать для служебных целей - чтобы в запросе `SELECT` сделать `GROUP BY` по серверам.

Если функция в запросе выполняется на сервере-инициаторе запроса, а вам нужно, чтобы она выполнялась на удалённых серверах, вы можете обернуть её в агрегатную функцию any или добавить в ключ в `GROUP BY`.
