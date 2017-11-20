<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MobileFuelFees
 *
 * @ORM\Table(name="mobile_fuel_fees", indexes={@ORM\Index(name="IDX_3CF2D222E78C9C0A", columns={"engine_id"}), @ORM\Index(name="IDX_3CF2D22297C79677", columns={"fuel_id"}), @ORM\Index(name="IDX_3CF2D222EC8B7ADE", columns={"period_id"})})
 * @ORM\Entity
 */
class MobileFuelFees
{
    /**
     * @var float
     *
     * @ORM\Column(name="fee", type="float", precision=10, scale=0, nullable=true)
     */
    private $fee;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_fuel_fees_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\MobileEngine
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\MobileEngine")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="engine_id", referencedColumnName="id")
     * })
     */
    private $engine;

    /**
     * @var \AppBundle\Entity\MobileFuel
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\MobileFuel")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="fuel_id", referencedColumnName="id")
     * })
     */
    private $fuel;

    /**
     * @var \AppBundle\Entity\Period
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Period")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="period_id", referencedColumnName="id")
     * })
     */
    private $period;


}

