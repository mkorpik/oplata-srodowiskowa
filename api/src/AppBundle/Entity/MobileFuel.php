<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MobileFuel
 *
 * @ORM\Table(name="mobile_fuel")
 * @ORM\Entity
 */
class MobileFuel
{
    /**
     * @var float
     *
     * @ORM\Column(name="conversion", type="float", precision=10, scale=0, nullable=true)
     */
    private $conversion;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_fuel_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;


}

