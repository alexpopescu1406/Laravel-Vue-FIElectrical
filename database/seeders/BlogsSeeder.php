<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blogs = [
            [
                'title' => 'Electric Motors',
                'user_id' => '1',
                'status' => '1',
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
                'status' => '2',
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
                'status' => '3',
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
            ]
        ];

        foreach ($blogs as $blog) {
            Blog::updateOrCreate([
                'title' => $blog['title'],
            ],
                collect($blog)->only('user_id', 'status', 'dateday', 'datemonth', 'description', 'image')->toArray()
            );
        }
    }
}
