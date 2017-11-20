<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MobileFuelToMobile
 *
 * @ORM\Table(name="mobile_fuel_to_mobile", indexes={@ORM\Index(name="IDX_2B2F5525E78C9C0A", columns={"engine_id"}), @ORM\Index(name="IDX_2B2F552597C79677", columns={"fuel_id"}), @ORM\Index(name="IDX_2B2F5525B806424B", columns={"mobile_id"})})
 * @ORM\Entity
 */
class MobileFuelToMobile
{
    /**
     * @var integer
     *
     * @ORM\Column(name="deleted", type="integer", nullable=true)
     */
    private $deleted;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_fuel_to_mobile_id_seq", allocationSize=1, initialValue=1)
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
     * @var \AppBundle\Entity\Mobile
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Mobile")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="mobile_id", referencedColumnName="id")
     * })
     */
    private $mobile;


}

