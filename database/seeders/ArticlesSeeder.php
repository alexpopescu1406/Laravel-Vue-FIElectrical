<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $articles = [
            [
                'title' => 'Electric Motors',
                'user_id' => '1',
                'status' => 'Published',
                'dateday' => '23',
                'datemonth' => 'June',
                'description' => 'An electric motor is an electrical machine that converts electrical energy into mechanical energy. Most electric motors operate through the interaction between the motors magnetic field and electric current in a wire winding to generate force in the form of torque applied on the motors shaft. An electric generator is mechanically identical to an electric motor, but operates with a reversed flow of power, converting mechanical energy into electrical energy.
Electric motors can be powered by direct current (DC) sources, such as from batteries, or rectifiers, or by alternating current (AC) sources, such as a power grid, inverters or electrical generators.
',
                'image' => 'images/LCu8OFzFhuaJMzSl.jpeg'
            ],
            [
                'title' => 'Integrated Circuits',
                'user_id' => '1',
                'status' => 'Published',
                'dateday' => '12',
                'datemonth' => 'March',
                'description' => 'An integrated circuit or monolithic integrated circuit (also referred to as an IC, a chip, or a microchip) is a set of electronic circuits on one small flat piece (or "chip") of semiconductor material, usually silicon. Large numbers of tiny MOSFETs (metal–oxide–semiconductor field-effect transistors) integrate into a small chip. This results in circuits that are orders of magnitude smaller, faster, and less expensive than those constructed of discrete electronic components. The ICs mass production capability, reliability, and building-block approach to integrated circuit design has ensured the rapid adoption of standardized ICs in place of designs using discrete transistors. ICs are now used in virtually all electronic equipment and have revolutionized the world of electronics. Computers, mobile phones and other home appliances are now inextricable parts of the structure of modern societies, made possible by the small size and low cost of ICs such as modern computer processors and microcontrollers.

    Very-large-scale integration was made practical by technological advancements in metal–oxide–silicon (MOS) semiconductor device fabrication. Since their origins in the 1960s, the size, speed, and capacity of chips have progressed enormously, driven by technical advances that fit more and more MOS transistors on chips of the same size – a modern chip may have many billions of MOS transistors in an area the size of a human fingernail. These advances, roughly following Moores law, make the computer chips of today possess millions of times the capacity and thousands of times the speed of the computer chips of the early 1970s.

ICs have two main advantages over discrete circuits: cost and performance. The cost is low because the chips, with all their components, are printed as a unit by photolithography rather than being constructed one transistor at a time. Furthermore, packaged ICs use much less material than discrete circuits. Performance is high because the ICs components switch quickly and consume comparatively little power because of their small size and proximity. The main disadvantage of ICs is the high cost of designing them and fabricating the required photomasks. This high initial cost means ICs are only commercially viable when high production volumes are anticipated.',
                'image' => 'images/mR66UCl7wi66gPyP.jpeg'
            ],
            [
                'title' => 'Digital Logic Design',
                'user_id' => '1',
                'status' => 'Published',
                'dateday' => '22',
                'datemonth' => 'March',
                'description' => 'A digital logic gate can have more than one input, for example, inputs A, B, C, D etc., but generally only have one digital output, (Q). Individual logic gates can be connected or cascaded together to form a logic gate function with any desired number of inputs, or to form combinational and sequential type circuits, or to produce differnt logic gate functions from standard gates.

Standard commercially available digital logic gates are available in two basic families or forms, TTL which stands for Transistor-Transistor Logic such as the 7400 series, and CMOS which stands for Complementary Metal-Oxide-Silicon which is the 4000 series of chips. This notation of TTL or CMOS refers to the logic technology used to manufacture the integrated circuit, (IC) or a “chip” as it is more commonly called.

Digital Logic Gate

Generally speaking, TTL logic IC’s use NPN and PNP type Bipolar Junction Transistors while CMOS logic IC’s use complementary MOSFET or JFET type Field Effect Transistors for both their input and output circuitry.

As well as TTL and CMOS technology, simple digital logic gates can also be made by connecting together diodes, transistors and resistors to produce RTL, Resistor-Transistor logic gates, DTL, Diode-Transistor logic gates or ECL, Emitter-Coupled logic gates but these are less common now compared to the popular CMOS family.

Integrated Circuits or IC’s as they are more commonly called, can be grouped together into families according to the number of transistors or “gates” that they contain. For example, a simple AND gate my contain only a few individual transistors, were as a more complex microprocessor may contain many thousands of individual transistor gates. Integrated circuits are categorised according to the number of logic gates or the complexity of the circuits within a single chip with the general classification for the number of individual gates given as:

Classification of Integrated Circuits
Small Scale Integration or (SSI) – Contain up to 10 transistors or a few gates within a single package such as AND, OR, NOT gates.
Medium Scale Integration or (MSI) – between 10 and 100 transistors or tens of gates within a single package and perform digital operations such as adders, decoders, counters, flip-flops and multiplexers.
Large Scale Integration or (LSI) – between 100 and 1,000 transistors or hundreds of gates and perform specific digital operations such as I/O chips, memory, arithmetic and logic units.
Very-Large Scale Integration or (VLSI) – between 1,000 and 10,000 transistors or thousands of gates and perform computational operations such as processors, large memory arrays and programmable logic devices.
Super-Large Scale Integration or (SLSI) – between 10,000 and 100,000 transistors within a single package and perform computational operations such as microprocessor chips, micro-controllers, basic PICs and calculators.
Ultra-Large Scale Integration or (ULSI) – more than 1 million transistors – the big boys that are used in computers CPUs, GPUs, video processors, micro-controllers, FPGAs and complex PICs.
While the “ultra large scale” ULSI classification is less well used, another level of integration which represents the complexity of the Integrated Circuit is known as the System-on-Chip or (SOC) for short. Here the individual components such as the microprocessor, memory, peripherals, I/O logic etc, are all produced on a single piece of silicon and which represents a whole electronic system within one single chip, literally putting the word “integrated” into integrated circuit.

These complete integrated chips which can contain up to 100 million individual silicon-CMOS transistor gates within one single package are generally used in mobile phones, digital cameras, micro-controllers, PIC’s and robotic type applications.

Moore’s Law
In 1965, Gordon Moore co-founder of the Intel corporation predicted that “The number of transistors and resistors on a single chip will double every 18 months” regarding the development of semiconductor gate technology. When Gordon Moore made his famous comment way back in 1965 there were approximately only 60 individual transistor gates on a single silicon chip or die.

The worlds first microprocessor in 1971 was the Intel 4004 that had a 4-bit data bus and contained about 2,300 transistors on a single chip, operating at about 600kHz. Today, the Intel Corporation have placed a staggering 1.2 Billion individual transistor gates onto its new Quad-core i7-2700K Sandy Bridge 64-bit microprocessor chip operating at nearly 4GHz, and the on-chip transistor count is still rising, as newer faster microprocessors and micro-controllers are developed.

Digital Logic States
The Digital Logic Gate is the basic building block from which all digital electronic circuits and microprocessor based systems are constructed from. Basic digital logic gates perform logical operations of AND, OR and NOT on binary numbers.

In digital logic design only two voltage levels or states are allowed and these states are generally referred to as Logic “1” and Logic “0”, or HIGH and LOW, or TRUE and FALSE. These two states are represented in Boolean Algebra and standard truth tables by the binary digits of “1” and “0” respectively.

A good example of a digital state is a simple light switch. The switch can be either “ON” or “OFF”, one state or the other, but not both at the same time. Then we can summarise the relationship between these various digital states as being:
',
                'image' => 'images/GExvPqmpSjYu5UNT.jpeg'
            ],
            [
                'title' => 'Embedded Systems',
                'user_id' => '1',
                'status' => 'Published',
                'dateday' => '29',
                'datemonth' => 'Dec',
                'description' => 'An embedded system is a combination of computer hardware and software designed for a specific function. Embedded systems may also function within a larger system. The systems can be programmable or have a fixed functionality. Industrial machines, consumer electronics, agricultural and processing industry devices, automobiles, medical equipment, cameras, digital watches, household appliances, airplanes, vending machines and toys, as well as mobile devices, are possible locations for an embedded system.

While embedded systems are computing systems, they can range from having no user interface (UI) -- for example, on devices designed to perform a single task -- to complex graphical user interfaces (GUIs), such as in mobile devices. User interfaces can include buttons, LEDs (light-emitting diodes) and touchscreen sensing. Some systems use remote user interfaces as well.

MarketsandMarkets, a business-to-business (B2B) research firm, predicted that the embedded market will be worth $116.2 billion by 2025. Chip manufacturers for embedded systems include many well-known technology companies, such as Apple, IBM, Intel and Texas Instruments. The expected growth is partially due to the continued investment in artificial intelligence (AI), mobile computing and the need for chips designed for high-level processing.

Examples of embedded systems
Embedded systems are used in a wide range of technologies across an array of industries. Some examples include:

Automobiles. Modern cars commonly consist of many computers (sometimes as many as 100), or embedded systems, designed to perform different tasks within the vehicle. Some of these systems perform basic utility functions and others provide entertainment or user-facing functions. Some embedded systems in consumer vehicles include cruise control, backup sensors, suspension control, navigation systems and airbag systems.
Mobile phones. These consist of many embedded systems, including GUI software and hardware, operating systems (OSes), cameras, microphones, and USB (Universal Serial Bus) I/O (input/output) modules.
Industrial machines. They can contain embedded systems, like sensors, and can be embedded systems themselves. Industrial machines often have embedded automation systems that perform specific monitoring and control functions.
Medical equipment. These may contain embedded systems like sensors and control mechanisms. Medical equipment, such as industrial machines, also must be very user-friendly so that human health isnt jeopardized by preventable machine mistakes. This means they will often include a more complex OS and GUI designed for an appropriate UI.
How does an embedded system work?
Embedded systems always function as part of a complete device -- thats whats meant by the term embedded. They are low-cost, low-power-consuming, small computers that are embedded in other mechanical or electrical systems. Generally, they comprise a processor, power supply, and memory and communication ports. Embedded systems use the communication ports to transmit data between the processor and peripheral devices -- often, other embedded systems -- using a communication protocol. The processor interprets this data with the help of minimal software stored on the memory. The software is usually highly specific to the function that the embedded system serves.

The processor may be a microprocessor or microcontroller. Microcontrollers are simply microprocessors with peripheral interfaces and integrated memory included. Microprocessors use separate integrated circuits for memory and peripherals instead of including them on the chip. Both can be used, but microprocessors typically require more support circuitry than microcontrollers because there is less integrated into the microprocessor. The term system on a chip (SoC) is often used. SoCs include multiple processors and interfaces on a single chip. They are often used for high-volume embedded systems. Some example SoC types are the application-specific integrated circuit (ASIC) and the field-programmable gate array (FPGA).

Often, embedded systems are used in real-time operating environments and use a real-time operating system (RTOS) to communicate with the hardware. Near-real-time approaches are suitable at higher levels of chip capability, defined by designers who have increasingly decided the systems are generally fast enough and the tasks tolerant of slight variations in reaction. In these instances, stripped-down versions of the Linux operating system are commonly deployed, although other OSes have been pared down to run on embedded systems, including Embedded Java and Windows IoT (formerly Windows Embedded).

Characteristics of embedded systems
The main characteristic of embedded systems is that they are task-specific.

Additionally, embedded systems can include the following characteristics:

typically, consist of hardware, software and firmware;
can be embedded in a larger system to perform a specific function, as they are built for specialized tasks within the system, not various tasks;
can be either microprocessor-based or microcontroller-based -- both are integrated circuits that give the system compute power;
are often used for sensing and real-time computing in internet of things (IoT) devices, which are devices that are internet-connected and do not require a user to operate;
can vary in complexity and in function, which affects the type of software, firmware and hardware they use; and
are often required to perform their function under a time constraint to keep the larger system functioning properly.',
                'image' => 'images/4CnGnqeEa8iio6zM.jpeg'
            ],
        ];

        foreach ($articles as $article) {
            Article::updateOrCreate([
                'title' => $article['title'],
            ],
                collect($article)->only('user_id', 'status', 'dateday', 'datemonth', 'description', 'image')->toArray()
            );
        }
    }
}
